GO=go

default: build

get:
	$(GO) mod tidy

dev:
	$(GO) run $(filter-out %_test.go,$(wildcard *.go))

gen:
	cd crudGen && rm -rf ent && $(GO) generate ./... && cd ..

test:
	$(GO) test -v ./...

hbuild:
	$(GO) build -o studenture *.go

clean:
	rm studenture