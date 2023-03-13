import styled from 'styled-components/native';
import Card from '../common/Card';
import React, {useState} from 'react';
import Section from '../common/Section';
import Screen from '../layout/Screen';

import {useCategories} from '../../context/hooks';
import SearchInput from '../common/SearchInput';
import useDebounce from '../../hooks/debounce';

const Wrap = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
  margin-bottom: -10px;
`;

const Col = styled.View`
  width: 100%;
  padding: 10px;
`;

type Props = {
  navigation: any;
};
const Category = ({navigation}: Props) => {
  const categories = useCategories();

  const onPress = (id: number, title: string) => {
    navigation?.navigate('Posts', {
      cateId: id,
      title,
    });
  };

  const [keyword, setKeyword] = useState<string>('');
  const keyDebounce = useDebounce<string>(keyword, 300);

  const searchCate = keyDebounce
    ? categories.filter(cate => {
        const title = cate.title.toLocaleLowerCase();
        const args = title.split(' ');
        return args.indexOf(keyDebounce.toLowerCase()) > -1;
      })
    : categories;

  return (
    <Screen title={'Categories'}>
      <Section>
        <SearchInput keyword={keyword} setKeyword={setKeyword} />
      </Section>
      <Section>
        <Wrap>
          {searchCate.length > 0 &&
            searchCate.map(cate => {
              return (
                <Col key={cate.id}>
                  <Card
                    title={cate.title}
                    // isCate={true}
                    image={cate.image}
                    onPress={() => onPress(cate.id, cate.title)}
                    height={'150px'}
                  />
                </Col>
              );
            })}
        </Wrap>
      </Section>
    </Screen>
  );
};

export default Category;
