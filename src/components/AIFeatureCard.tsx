import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Brain, GitBranch, MessagesSquare, LightbulbIcon, BookOpen } from "lucide-react";

type IconName = "Brain" | "GitBranch" | "BarChart" | "MessagesSquare" | "LightbulbIcon" | "BookOpen";

interface AIFeatureCardProps {
  title: string;
  description: string;
  icon: IconName;
}

export function AIFeatureCard({ title, description, icon }: AIFeatureCardProps) {
  const IconComponent = {
    Brain,
    GitBranch,
    BarChart,
    MessagesSquare,
    LightbulbIcon,
    BookOpen
  }[icon];

  return (
    <Card className="hover:shadow-md transition-shadow overflow-hidden">
      <CardHeader className="pb-2">
        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <IconComponent className="size-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
