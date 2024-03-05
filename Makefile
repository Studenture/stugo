GO=go

default: build

get:
	$(GO) mod tidy

dev:
	$(GO) run $(filter-out %_test.go,$(wildcard *.go))

build:
	$(GO) build -o studenture *.go && cd frontend && pnpm run build && cd ..

fe: 
	cd frontend && pnpm dev && cd ..

gen:
	cd crudGen && rm -rf ent && $(GO) generate ./... && cd ..
	# pnpx openapi-typescript ./crudGen/openapi.json -o ./frontend/oAPIschema.d.ts
	cd frontend && pnpm run gen && cd ..
test:
	$(GO) test -v ./...

hbuild:
	$(GO) build -o studenture *.go

clean:
	rm studenture