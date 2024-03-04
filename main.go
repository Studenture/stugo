package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"studenture/ent"
	elk "studenture/ent/output/http"

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
	// Create the pet handler.
	r.Route("/users", func(r chi.Router) {
		elk.NewProfileHandler(c, l).MountRoutes(r)
	})
	r.Route("/posts", func(r chi.Router) {
		elk.NewPostHandler(c, l).MountRoutes(r)
	})
	r.Route("/auth", func(r chi.Router) {
		elk.NewAuthHandler(c, l).MountRoutes(r)
	})
	r.Route("/tags", func(r chi.Router) {
		elk.NewTagHandler(c, l).MountRoutes(r)
	})
	// Start listen to incoming requests.
	fmt.Println("Server running")
	defer fmt.Println("Server stopped")
	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatal(err)
	}
}
