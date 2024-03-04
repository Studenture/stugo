package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// Auth holds the schema definition for the Profile entity.
type Auth struct {
	ent.Schema
}

// Fields of the Auth.
func (Auth) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.New()).Unique(), // A UUID field.
		field.String("email").Unique(),        // A string field.
		field.String("password_hash"),         // A string field.
	}
}

// Edges of the Auth.
func (Auth) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("profile", Profile.Type).
			Unique().
			Required(),
	}
}
