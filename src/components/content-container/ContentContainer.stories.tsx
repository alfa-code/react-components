import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentContainer } from './index';

export default {
  title: 'Components/ContentContainer',
  component: ContentContainer,
} as ComponentMeta<typeof ContentContainer>;

const Template: ComponentStory<typeof ContentContainer> = (args) => {
  return (
    <ContentContainer>
      { args.children }
    </ContentContainer>
  )
}

export const Main = Template.bind({});

Main.args = {
  children: 'Content',
  label: 'ContentContainer',
};

export const WithText = Template.bind({});

WithText.args = {
  children: (
    <p>
      Историческая справка[править | править код] Первые системы HDTV, предполагающие развёртку в 1000 аналоговых строк, были предложены пионерами телевидения американцем Джоном Бэрдом и советским инженером Сергеем Новаковским в 1944 и 1946 годах[4][5]. Проект Бэрда был отвергнут, а Новаковский в 1958 году стал одним из создателей опытной системы военно-штабной связи «Трансформатор» с разрешением 1125 строк[6].   Логотип телевидения высокой чёткости Попытки создать телевидение высокой чёткости возобновились в 1970-х годах, когда стандартное телевидение по качеству изображения и размерам экрана приблизилось к своему потолку. Основа для будущих стандартов ТВЧ была заложена в марте 1972 года, во время очередного заседания 11-й исследовательской комиссии МККР, на котором также была утверждена первая международная программа по разработке методов цифровой компрессии ТВ-сигнала[7]. Системы телевидения высокой чёткости с самого начала разрабатывались не только для передачи высококачественного изображения на расстояние, но и для нужд кинематографа, промышленной и научной видеосъёмки, как стандарт для возможных электронных носителей киноизображения[8].  Непосредственной разработкой телевидения высокой чёткости и устройств для него начала заниматься с 1964 года японская государственная телекомпания NHK, в проекте также принимали участие Sony, Toshiba и NEC. Были созданы телевизоры, передающие камеры и другое оборудование, поддерживающее новый формат. В июне 1978 года компания продемонстрировала первую в мире работоспособную систему ТВЧ: 1125 строк при чересстрочной развёртке и соотношении сторон экрана 5:3[9][10]. Регулярное HD-вещание NHK начала с 1985 года, а в 1989 году после запуска спутника «Juri BC-3» аналоговый ТВЧ-сигнал через MUSE (Multiple sub-nyquist sampling Encoding system) стал доступен на всей территории Японии в диапазоне 11,7—12,5 ГГц. К 1990 году в японских домах стояло около 150 тысяч телевизоров, поддерживающих стандарт высокой чёткости NHK[11].  В Европе, в противовес японскому HD-формату, в рамках программы агентства EUREKA был предложен созданный на основе спутниковой системы MAC[en] (D2-MAC[en]) стандарт HD-MAC[en]* или «Эврика-95», использующий чересстрочную развёртку на 1250 строк при полукадровой частоте 50 Гц[12]. В разработке приняли участие Philips, Thomson, Nokia, Grundig и ряд научно-исследовательских и учебных институтов. Проект обошёлся в 350 миллионов долларов. Первые опытные передачи в HD-MAC состоялись через спутник TDE-2 в 1988 году во время чемпионата Европы по футболу, ещё через два года транслировался чемпионат мира 1990 года в Италии.  Итогом противоборства японской и европейской систем стало принятие двухсистемного стандарта на 1125 строк (из которых 1080 активных), пригодного как для стран, использующих кадровую частоту 60 Гц, так и для стран, поддерживающих 50-герцевую развёртку[13].  Активная разработка HD-вещания в США началась в 1981 году, после демонстрации японской системы NHK в Вашингтоне. На презентации присутствовал Рональд Рейган, объявивший создание телевидения высокой чёткости национальным приоритетом. Разработкой ТВЧ в Америке занимался альянс нескольких корпораций: AT&T Bell Labs, General Instrument, Philips, Sarnoff, Thomson, Zenith, а также Массачусетский технологический институт. В 1987 году был объявлен конкурс на лучший проект системы телевидения высокого разрешения для утверждения в качестве национального стандарта. Однако в ходе конкурса комиссия отказалась от аналоговых и гибридных систем и признала цифровой стандарт ATSC.  Цифровое телевидение высокой чёткости стало возможным благодаря появлению в первой половине 1990-х годов первых цифровых стандартов, учитывавших возможность цифрового вещания как в стандартном разрешении, так и в формате высокой чёткости. В августе 1993 года был окончательно сформирован первый стандарт сжатия цифрового видео — MPEG-1 (в дальнейшем от него отказались из-за многочисленных недостатков в пользу MPEG-2 и MPEG-4).  Первой публичной HD-трансляцией в цифровом формате считается телетрансляция, состоявшаяся 23 июля 1996 года со станции телекомпании WRAL-ТV в городе Роли (Северная Каролина). Через восемь дней, 31 июля 1996 года, началось HD-вещание со станции в Вашингтоне, принадлежащей NBC.  Официальная дата начала вещания в американском стандарте ATSC — 29 октября 1998 года, когда в формате высокой чёткости в прямом эфире был показан старт космического корабля «Дискавери». C 2002 года регулярное HD-вещание на территории США начали спутниковые операторы Dish Network и DirecTV, с 2003 года — кабельные.  1 июня 1999 года 11-я исследовательская комиссия Международного союза электросвязи приняла рекомендацию ITU-R ВТ.709-3, окончательно зафиксировавшую цифровой стандарт телевидения высокой чёткости.  В Японии современное цифровое HD-вещание в стандарте ISDB-T началось 1 декабря 2003 года в Токио, Осаке и Нагое. К октябрю 2007 года в Японии было продано 27 млн цифровых HD-приёмников.  Первой публичной HD-трансляцией в Европе считается запуск 1 января 2004 года HD-телеканала Euro1080. Первой программой стал традиционный новогодний концерт Венского филармонического оркестра.  Телевидение высокой чёткости — один из наиболее востребованных продуктов на рынке современного телевещания[14]. Все пять национальных телесетей США (ABC, NBC, CBS, Fox и The CW) сейчас вещают в HD-формате. Из 285 телеканалов, предоставляемых крупнейшим американским спутниковым оператором DirecTV, 195 являются телеканалами со стопроцентным HD-контентом[15].
    </p>
  ),
  label: 'ContentContainer',
};
