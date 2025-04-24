import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">TastyAI</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Тесты</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link to="/tests"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-primary-foreground">
                            Библиотека тестов
                          </div>
                          <p className="text-sm leading-tight text-primary-foreground/90">
                            Обширная коллекция тестов по разным темам
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem to="/tests/popular" title="Популярные">
                      Самые востребованные тесты нашей платформы
                    </ListItem>
                    <ListItem to="/tests/new" title="Новинки">
                      Недавно добавленные на платформу тесты
                    </ListItem>
                    <ListItem to="/tests/recommendations" title="Рекомендуемые">
                      Тесты, подобранные для вас ИИ
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/create" className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}>
                  Создать тест
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}>
                  О сервисе
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/login">Вход</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Регистрация</Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <div className="grid gap-2">
              <Link to="/tests" className="block px-4 py-2 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Тесты
              </Link>
              <Link to="/create" className="block px-4 py-2 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Создать тест
              </Link>
              <Link to="/about" className="block px-4 py-2 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                О сервисе
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Вход</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>Регистрация</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = ({ className, title, children, to, ...props }: React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
