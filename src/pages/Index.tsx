import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AIFeatureCard } from "@/components/AIFeatureCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PopularTestList } from "@/components/PopularTestList";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary">
                Создавайте и проходите тесты с помощью ИИ
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Наша платформа позволяет легко создавать профессиональные тесты и проходить их,
                используя возможности искусственного интеллекта для улучшения результатов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" asChild>
                  <Link to="/create">Создать тест</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/tests">Пройти тесты</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Преимущества нашей платформы
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto">
                Используйте возможности искусственного интеллекта для создания и прохождения тестов любой сложности
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AIFeatureCard 
                title="Автоматическая генерация вопросов" 
                description="ИИ помогает создавать релевантные вопросы на основе вашего материала"
                icon="Brain"
              />
              <AIFeatureCard 
                title="Адаптивное тестирование" 
                description="Тесты автоматически подстраиваются под уровень знаний пользователя"
                icon="GitBranch"
              />
              <AIFeatureCard 
                title="Анализ результатов" 
                description="Подробная аналитика и рекомендации для улучшения знаний"
                icon="BarChart"
              />
            </div>
          </div>
        </section>

        {/* Popular Tests Section */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Популярные тесты
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto">
                Просмотрите и пройдите наиболее популярные тесты, созданные нашими пользователями
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all">Все категории</TabsTrigger>
                <TabsTrigger value="education">Образование</TabsTrigger>
                <TabsTrigger value="professional">Профессиональные</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <PopularTestList category="all" />
              </TabsContent>
              <TabsContent value="education">
                <PopularTestList category="education" />
              </TabsContent>
              <TabsContent value="professional">
                <PopularTestList category="professional" />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Card className="bg-primary/5 border-none">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-center">Готовы начать?</CardTitle>
                <CardDescription className="text-center md:text-lg">
                  Присоединяйтесь к тысячам пользователей, использующих нашу платформу
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg" className="mt-4" asChild>
                  <Link to="/register">Создать аккаунт</Link>
                </Button>
              </CardContent>
              <CardFooter className="text-center text-sm text-muted-foreground">
                Уже есть аккаунт? <Link to="/login" className="text-primary underline">Войти</Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
