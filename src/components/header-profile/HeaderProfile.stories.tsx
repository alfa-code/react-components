import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderProfile } from './index';

export default {
  title: 'Components/HeaderProfile',
  component: HeaderProfile,
} as ComponentMeta<typeof HeaderProfile>;

const Template: ComponentStory<typeof HeaderProfile> = (args) => {
  return (
    <>
      <div style={ { display: 'flex', justifyContent: 'end', } }>
        <HeaderProfile {...args} >
          <div>
            menu list
          </div>
        </HeaderProfile>
      </div>
      <p>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
      </p>
    </>
  )
}

export const Main = Template.bind({});

Main.args = {
  avatarSrc: 'https://html5css.ru/howto/img_avatar.png',
  username: 'Неопознанный волк',
};

