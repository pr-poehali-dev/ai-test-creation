import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";

interface PopularTestListProps {
  category: string;
}

type TestItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  completions: number;
  estimatedTime: string;
};

export function PopularTestList({ category }: PopularTestListProps) {
  // В реальном приложении здесь будет запрос к API
  const mockTests: TestItem[] = [
    {
      id: "1",
      title: "Основы программирования на Python",
      description: "Проверьте свои знания основ программирования на языке Python",
      category: "education",
      tags: ["Программирование", "Python", "Начальный уровень"],
      completions: 5240,
      estimatedTime: "15 мин"
    },
    {
      id: "2",
      title: "Тест на знание React.js",
      description: "Проверьте свои знания библиотеки React и её основных концепций",
      category: "professional",
      tags: ["Программирование", "React", "JavaScript", "Средний уровень"],
      completions: 3122,
      estimatedTime: "20 мин"
    },
    {
      id: "3",
      title: "ЕГЭ по математике: Тренировочный тест",
      description: "Подготовка к ЕГЭ по математике с задачами разного уровня сложности",
      category: "education",
      tags: ["Математика", "ЕГЭ", "Школа"],
      completions: 8901,
      estimatedTime: "40 мин"
    },
    {
      id: "4",
      title: "Управление проектами: методология Agile",
      description: "Проверьте свои знания в области управления проектами по методологии Agile",
      category: "professional",
      tags: ["Менеджмент", "Agile", "Scrum", "Продвинутый уровень"],
      completions: 2340,
      estimatedTime: "25 мин"
    },
    {
      id: "5",
      title: "История России: XIX век",
      description: "Тест на знание ключевых событий истории России XIX века",
      category: "education",
      tags: ["История", "XIX век", "Россия"],
      completions: 3560,
      estimatedTime: "30 мин"
    },
    {
      id: "6",
      title: "Базы данных: SQL запросы",
      description: "Проверьте свои навыки написания SQL запросов разной сложности",
      category: "professional",
      tags: ["Базы данных", "SQL", "Средний уровень"],
      completions: 4230,
      estimatedTime: "35 мин"
    }
  ];

  // Фильтрация тестов по категории
  const filteredTests = category === 'all' 
    ? mockTests 
    : mockTests.filter(test => test.category === category);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {filteredTests.map((test) => (
        <Card key={test.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{test.title}</CardTitle>
            <CardDescription>{test.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {test.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="size-4" />
                <span>{test.completions.toLocaleString()} прошли</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-4" />
                <span>{test.estimatedTime}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to={`/test/${test.id}`}>Пройти тест</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
