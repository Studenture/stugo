package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"studenture/crudGen/ent"
	entoas "studenture/crudGen/ent/http"

	"github.com/go-chi/chi/v5"
	_ "github.com/mattn/go-sqlite3"
	"go.uber.org/zap"
)

func main() {
	// Create the ent client.
	c, err := ent.Open("sqlite3", "./ent.db?_fk=1")
	if err != nil {
		log.Fatalf("failed opening connection to sqlite: %v", err)
	}
	defer c.Close()
	// Run the auto migration tool.
	if err := c.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}
	// Router and Logger.
	r, l := chi.NewRouter(), zap.NewExample()

	r.Get("/openapi", func(w http.ResponseWriter, r *http.Request) {
		http.FileServer(http.Dir("./crudGen/openapi.json")).ServeHTTP(w, r)
	})

	//return hello world at /
	r.Get("/ss", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello, world!"))
	})
	entoas.NewPostHandler(c, l).MountRoutes(r)
	entoas.NewProfileHandler(c, l).MountRoutes(r)
	//TODO: authn routes
	entoas.NewAuthHandler(c, l).MountRoutes(r)
	entoas.NewTagHandler(c, l).MountRoutes(r)
	//expose swagger ui based on openapi.json
	r.Get("/swagger/*", func(w http.ResponseWriter, r *http.Request) {
		http.FileServer(http.Dir("./swagger-ui")).ServeHTTP(w, r)
	})

	// Start listen to incoming requests.
	fmt.Println("Server running")
	defer fmt.Println("Server stopped")
	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatal(err)
	}
}
