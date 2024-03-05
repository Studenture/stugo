package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
	"github.com/masseelch/elk"
)

// Job Post holds the schema definition for the Post entity.
type Post struct {
	ent.Schema
}

// Fields of the Job Post.
func (Post) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.New()).Unique(), // A UUID field.
		//created by
		field.String("created_by"), // A string field.
		field.String("title"),      // A string field.
		field.String("content"),    // A string field.
		field.Enum("status").
			Values("published", "draft", "withdrawn").
			Default("draft"), // A string field with default value.
		field.String("subHead").
			Optional(), // The text below the title
		field.Int("estimate_salary").
			Optional(), // An optional int field.
		field.String("apply_url"), // An optional string field.
		//latitude and longitude
		field.Float("latitude").
			Optional(), // An optional float field.
		field.Float("longitude").
			Optional(), // An optional float field.
		// A time
		field.Time("created_at"), // A time field.
		field.Time("updated_at").
			Optional(), // An optional time field.
	}
}

// Edges of the Job Post.
func (Post) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("author", Profile.Type).
			Ref("posts").
			Unique().
			Annotations(elk.Groups("user")),
		edge.To("tags", Tag.Type).
			Annotations(elk.Groups("user")),
	}
}
