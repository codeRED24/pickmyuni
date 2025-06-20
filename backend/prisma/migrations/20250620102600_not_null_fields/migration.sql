-- AlterTable
ALTER TABLE "Articles" ALTER COLUMN "meta_desc" DROP NOT NULL,
ALTER COLUMN "og_img" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Colleges" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "contact" DROP NOT NULL,
ALTER COLUMN "media_url" DROP NOT NULL,
ALTER COLUMN "meta_desc" DROP NOT NULL,
ALTER COLUMN "og_img" DROP NOT NULL,
ALTER COLUMN "acceptance_rate" DROP NOT NULL,
ALTER COLUMN "acceptance_rate" DROP DEFAULT,
ALTER COLUMN "international_student_rate" DROP NOT NULL,
ALTER COLUMN "international_student_rate" DROP DEFAULT,
ALTER COLUMN "pr_pathway" DROP NOT NULL,
ALTER COLUMN "total_students" DROP NOT NULL,
ALTER COLUMN "total_students" DROP DEFAULT,
ALTER COLUMN "parent_college_id" DROP NOT NULL,
ALTER COLUMN "established" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CollegesCourses" ALTER COLUMN "meta_desc" DROP NOT NULL,
ALTER COLUMN "og_img" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CollegewiseContent" ALTER COLUMN "meta_desc" DROP NOT NULL,
ALTER COLUMN "og_img" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Courses" ALTER COLUMN "meta_desc" DROP NOT NULL,
ALTER COLUMN "og_img" DROP NOT NULL;
