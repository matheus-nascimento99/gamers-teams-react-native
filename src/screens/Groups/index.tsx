import { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import * as S from './style'

export const Groups = () => {

  const [groups, setGroups] = useState<string[]>([]);

  return (
    <S.Container>
      <Header />
      <Highlight 
        title='Turmas'
        subtitle='jogue com a sua turma'
      />
      
      <FlatList
        data={groups}
        renderItem={({item, index}) => (
          <GroupCard 
            title={item} 
          /> 
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && {flex:1}}
        ListEmptyComponent={()=>(
          <ListEmpty 
            message='Que tal cadastrar a primeira turma?' 
          />
        )}
      />
    </S.Container>
  );
}

