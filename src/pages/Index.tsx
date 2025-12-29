import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            💼 ИП Нищебродov
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#story" className="text-foreground/80 hover:text-primary transition-colors">История</a>
            <a href="#tips" className="text-foreground/80 hover:text-primary transition-colors">Советы</a>
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
              ИП Нищебродov
            </span>
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
                <div className="text-4xl">🛒</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">Глава 1: Маркетплейсы и Мечты</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Всё началось красиво! Торговал на маркетплейсах, дела шли неплохо. Думал, вот она — моя золотая жила! 
                    Обороты растут, карман пополняется, жизнь налаживается. Но это было только начало... 💰
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-secondary bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-secondary/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🇨🇳</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-secondary">Глава 2: 2022 год — Китай и Амбиции</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Наступил 2022 год, я решил: "Пора выходить на новый уровень!" Начал работать напрямую с Китаем, контракты, поставки, всё по-взрослому. 
                    Вложил все деньги, взял кредиты... Казалось, что сейчас рванём как SpaceX! 🚀
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-accent bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💥</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">Глава 3: Кризис с Казахстаном</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    А потом БАХ! Кризис с Казахстаном! Логистика встала, контейнеры застряли, поставщики испарились. 
                    Деньги уже ушли, а товара нет. Клиенты требуют возврат, банк звонит по кредитам... 
                    Но это ещё был не конец истории! 😰
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-destructive bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-destructive/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💸</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-destructive">Глава 4: Финальный Босс — Налоговая</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    И тут налоговая решила добить меня окончательно. Попутали начисления, прилетели штрафы за то, что я даже не делал! 
                    Пытался разобраться, писал, доказывал... Бесполезно. Результат? <span className="text-destructive font-bold text-2xl">-25 МИЛЛИОНОВ РУБЛЕЙ</span> долга! 
                    Да, минус двадцать пять лямов, Карл! 😱
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">🎪 Где я сейчас:</p>
                <p className="text-lg text-foreground/80 mb-4">
                  Сижу "счастливый" с долгом в 25 миллионов и вообще не знаю, что делать. 
                  Прикинь, до какого отчаяния я дошёл, что СОЗДАЛ ЭТОТ САЙТ! 🤡
                </p>
                <p className="text-base text-muted-foreground italic">
                  Но я не таксист! У меня был НАСТОЯЩИЙ бизнес. Просто весь мир решил объединиться против меня: 
                  кризисы, налоговая, логистика... Теперь тут сижу, по сайтам прошу помощи. Вот такие дела, бонжур-мадам! 🎩
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
            <p className="text-xl text-muted-foreground mb-4">
              Каждый рубль приближает меня к закрытию налоговых долгов в 25 млн рублей
            </p>
            <div className="inline-block px-6 py-2 bg-destructive/20 rounded-full border border-destructive/30 mb-8">
              <p className="text-sm font-medium text-destructive">💀 Да, это реальная сумма. Да, я в отчаянии. Да, я создал сайт. 💀</p>
            </div>

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

      <section id="tips" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Советы Бомжа 🎓
            </h2>
            <p className="text-muted-foreground text-lg">Бесценный опыт от человека, который потерял 25 миллионов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:shadow-2xl hover:shadow-primary/30 transition-all group">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🍾</div>
                <h3 className="text-xl font-bold mb-3 text-primary">Совет #1</h3>
                <p className="text-lg font-semibold mb-4">Как я заработал 1 000 ₽ на сборе бутылок</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Забудьте про венчурных инвесторов! Настоящая бизнес-модель — это стеклотара. 
                  За первую неделю я заработал больше, чем последний месяц работы с Китаем. 
                  Секрет успеха: парки после выходных и дворы после корпоративов. 
                  ROI — 1000%, себестоимость — 0 рублей!
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-accent">
                  <Icon name="TrendingUp" size={16} />
                  <span>Проверенная стратегия</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-secondary/30 hover:shadow-2xl hover:shadow-secondary/30 transition-all group">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💡</div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Совет #2</h3>
                <p className="text-lg font-semibold mb-4">Почему ваш стартап хуже моего?</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Пока вы платите за коворкинг, аренду офиса и электричество — я уже оптимизировал все расходы! 
                  Мой офис — скамейка в парке. Моё электричество — бесплатный WiFi в МакДональдсе. 
                  Мои сотрудники — голуби (они работают за семечки). 
                  Вот это я понимаю lean startup!
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-accent">
                  <Icon name="Zap" size={16} />
                  <span>Zero overhead costs</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:shadow-2xl hover:shadow-accent/30 transition-all group">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🐕</div>
                <h3 className="text-xl font-bold mb-3 text-accent">Совет #3</h3>
                <p className="text-lg font-semibold mb-4">Инвесторы отказали. Теперь мой партнёр — бродячая собака</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Искал соучредителя на VC.ru полгода — никого. Познакомился с Шариком возле помойки — 
                  идеальный партнёр! Не спорит о доле в компании, не требует зарплату, 
                  охраняет «офис» (картонную коробку). Единственный минус — 
                  иногда путает документы с газетами. Зато лоялен на 100%!
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-accent">
                  <Icon name="Heart" size={16} />
                  <span>Настоящая дружба</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 inline-block">
              <p className="text-lg font-semibold mb-2">📚 Бонус-совет от основателя:</p>
              <p className="text-foreground/80 max-w-2xl">
                Если налоговая требует 25 миллионов — не паникуйте! 
                Просто создайте сайт и попросите помощи в интернете. 
                Это мой текущий бизнес-план, и он работает лучше, чем все предыдущие! 😅
              </p>
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
            💼 ИП Нищебродov
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
            © 2024 ИП Нищебродov. Все права защищены (если налоговая не заберёт). Made with 💜 and desperation
          </p>
        </div>
      </footer>
    </div>
  );
}