import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import fs from "fs";
import { z } from "zod";

const FrontMatterSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, "Slug must be lowercase with hyphens only"),
  title: z.string().min(1).max(200),
  description: z.string().min(1).max(500),
  date: z.iso.date("Date must be ISO(YYYY-MM-DD) format"),
  tags: z.array(z.string()).min(1, "At least one tag required"),
  author: z.string().min(1),
  featured: z.boolean().default(false)
});

try {
  const blogPosts = [];
  const blogsDir = "blogs";

  const files = fs.readdirSync(blogsDir, { withFileTypes: true });
  const mdFiles = files.filter((file) => file.isFile() && file.name.endsWith(".md"));

  if (mdFiles.length === 0) {
    console.warn("No markdown files found in blogs directory");
  }

  for (const file of mdFiles) {
    console.log("Parsing", file.name);

    try {
      const filePath = path.join(blogsDir, file.name);
      const { data, content } = matter.read(filePath);

      const validatedData = FrontMatterSchema.parse(data);

      blogPosts.push({
        ...validatedData,
        content: marked(content)
      });

      console.log(`✓ Successfully processed ${file.name}`);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error(`✗ Validation failed for ${file.name}:`);
        error.issues.forEach((issue) => {
          console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
        });
      } else {
        console.error(`✗ Error processing ${file.name}:`, error.message);
      }
      process.exit(1);
    }
  }

  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync("public/blogs.json", JSON.stringify(blogPosts));

  console.log(`\n✓ Successfully generated blogs.json with ${blogPosts.length} posts`);
} catch (err) {
  console.error("✗ Fatal error:", err.message);
  process.exit(1);
}
