import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">TastyAI</h3>
          <p className="text-sm text-muted-foreground">
            Современная платформа для создания и прохождения тестов с применением искусственного интеллекта
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Платформа</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tests" className="text-muted-foreground hover:text-foreground transition-colors">
                  Библиотека тестов
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors">
                  Создать тест
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Тарифы
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Подпишитесь на новости</h4>
          <form className="flex max-w-xs space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
            >
              OK
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mt-8 border-t pt-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {currentYear} TastyAI. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
