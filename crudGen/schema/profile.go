package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/masseelch/elk"
)

// Profile holds the schema definition for the Profile entity.
type Profile struct {
	ent.Schema
}

// Fields of the Profile.
func (Profile) Fields() []ent.Field {
	return []ent.Field{
		field.String("auth_link"),
		field.String("name"),
		field.String("description"),
		field.String("logo"),
		field.String("website"),
		field.Enum("type").Values("user", "banned", "student", "venture", "admin"),

		field.Time("created_at"),
		field.Time("updated_at").Optional(),
	}
}

// Edges of the Profile.
func (Profile) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("posts", Post.Type).
			Annotations(elk.Groups("user")),
		edge.To("auth", Auth.Type),
	}
}

// Annotations of the Profile.
func (Profile) Annotations() []schema.Annotation {
	return []schema.Annotation{
		elk.ReadGroups("user"),
		// elk.Groups("user"),
	}
}
