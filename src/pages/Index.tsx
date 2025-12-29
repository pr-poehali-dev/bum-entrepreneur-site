import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            💼 БизнесБомж
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#story" className="text-foreground/80 hover:text-primary transition-colors">История</a>
            <a href="#donate" className="text-foreground/80 hover:text-primary transition-colors">Донаты</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full border border-primary/30 animate-pulse-slow">
            <span className="text-sm font-medium">🎩 Бонжур, мадам!</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Не Таксист,
            </span>
            <br />
            <span className="text-foreground">А Бизнесмен!</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Да-да, у меня свой бизнес! Правда, налоги съели всё... Помоги по братски закрыть долги перед государством! 🙏
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 py-6 rounded-2xl shadow-lg shadow-primary/50"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Heart" className="mr-2" size={20} />
              Помочь по братски
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-lg px-8 py-6 rounded-2xl hover:bg-primary/10"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Моя история
            </Button>
          </div>
        </div>
      </section>

      <section id="story" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Как Я Стал Таким 📖
            </h2>
            <p className="text-muted-foreground text-lg">История успеха наоборот</p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-primary bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">Глава 1: Начало Пути</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Всё началось с мечты! Я решил: "Буду предпринимателем!" Открыл ИП, зарегистрировал бизнес по продаже товаров через интернет. 
                    Думал, щас разбогатею, как все эти гуру из инстаграма обещают! 💰
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-secondary bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-secondary/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📈</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-secondary">Глава 2: Золотое Время</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Первые полгода прям огонь был! Продажи идут, клиенты довольны, деньги капают. Я уже представлял себя на Мальдивах с коктейлем. 
                    Но забыл одну маленькую деталь... Налоги надо платить! А я, дурачок, думал это потом как-нибудь 😅
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-accent bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📉</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">Глава 3: Реальность Ударила</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Пришло письмо от налоговой... Сумма там такая, что я думал это спам! Оказалось - нет. 
                    Всё, что заработал, ушло на налоги, штрафы и пени. Теперь сижу, продаю остатки товара и собираю на погашение долгов. 
                    Вот такая бизнес-школа жизни! 🎓💸
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">🎪 Мораль истории:</p>
                <p className="text-lg text-foreground/80">
                  Я не таксист, у меня РЕАЛЬНЫЙ бизнес есть! Просто налоговая оказалась быстрее и хитрее меня. 
                  Зато теперь я знаю, что бухгалтер - это не роскошь, а необходимость! 📊
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Помоги По Братски! 🤝
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Каждый рубль приближает меня к закрытию налоговых долгов и возвращению к нормальной жизни
            </p>

            <Card className="p-12 bg-gradient-to-br from-card to-muted border-2 border-primary/30 shadow-2xl shadow-primary/20">
              <div className="space-y-8">
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-white rounded-3xl p-6 shadow-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-background font-bold text-lg">QR-код для доната</p>
                      <p className="text-background/60 text-sm mt-2">Сканируй и помогай</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/30">
                    <Icon name="CreditCard" className="text-primary" size={24} />
                    <span className="font-mono text-lg">Карта: 2202 XXXX XXXX 1234</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 bg-secondary/10 rounded-xl border border-secondary/30">
                    <Icon name="Phone" className="text-secondary" size={24} />
                    <span className="font-mono text-lg">Телефон: +7 (900) 123-45-67</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Популярные суммы:</p>
                  <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all">
                      100 ₽
                    </Button>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all">
                      500 ₽
                    </Button>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all">
                      1000 ₽
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground italic">
                  💜 "Merci beaucoup за помощь! Вместе мы победим налоговую!" 💜
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Связаться Со Мной 📞
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Есть вопросы? Хочешь узнать больше о моих бизнес-приключениях? Пиши!
          </p>

          <div className="grid gap-6">
            <Card className="p-6 hover:shadow-lg hover:shadow-primary/20 transition-all border-l-4 border-primary bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold">biznes.bomzh@mail.ru</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-secondary/20 transition-all border-l-4 border-secondary bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Icon name="Send" className="text-secondary" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Telegram</p>
                  <p className="text-lg font-semibold">@biznes_bomzh</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-accent/20 transition-all border-l-4 border-accent bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Instagram" className="text-accent" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="text-lg font-semibold">@biznes.bomzh.entrepreneur</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-primary/20">
            <p className="text-lg font-semibold mb-2">🎭 Важное уточнение:</p>
            <p className="text-foreground/80">
              Да, я правда предприниматель! Просто немного неудачливый. Но учусь на своих ошибках и двигаюсь дальше. 
              А пока - буду благодарен любой помощи! 🙏
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-background">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            💼 БизнесБомж
          </div>
          <p className="text-muted-foreground mb-6">
            Не таксист, а настоящий предприниматель! Правда, немного в затруднительном положении... 😅
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary/20 hover:text-secondary">
              <Icon name="Send" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent/20 hover:text-accent">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 БизнесБомж. Все права защищены (если налоговая не заберёт). Made with 💜 and desperation
          </p>
        </div>
      </footer>
    </div>
  );
}
