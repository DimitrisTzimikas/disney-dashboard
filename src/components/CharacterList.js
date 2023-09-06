import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters, selectCharacters} from '../redux/characterSlice';
import {
  Typography, Grid, Card, CardContent, CircularProgress, List, ListItem, ListItemText, Box
} from '@mui/material';

import PerPageSelector from './PerPageSelector';
import CharacterSearch from './CharacterSearch';

function CharacterList() {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const [itemsPerPage, setItemsPerPage] = useState(50)
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCharacters(itemsPerPage));
  }, [dispatch, itemsPerPage]);

  if (characters.length === 0) {
    return <Box padding={20}><CircularProgress/></Box>;
  }

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (<div>
    <Typography variant="h4" gutterBottom>
      Disney Characters
    </Typography>

    <Box sx={{m: 2}}>
      <PerPageSelector value={itemsPerPage} onChange={setItemsPerPage}/>
    </Box>

    <Box sx={{m: 2}}>
      <CharacterSearch onSearch={setSearchTerm}/>
    </Box>

    <Grid container spacing={2} padding={2}>
      {filteredCharacters.map((character) => (<Grid item xs={12} sm={6} md={4} lg={3} key={character._id}>
        <Card>
          <CardContent>
            <Typography variant="h6">{character.name}</Typography>
            <Typography variant="subtitle1">TV Shows: {character.tvShows}</Typography>
            <Typography variant="subtitle1">Video Games: {character.videoGames}</Typography>
            <Typography variant="subtitle1">Allies:</Typography>
            <List dense>
              {character.allies.map((ally, index) => (<ListItem key={index}>
                <ListItemText primary={ally}/>
              </ListItem>))}
            </List>
            <Typography variant="subtitle1">Enemies:</Typography>
            <List dense>
              {character.enemies.map((enemy, index) => (<ListItem key={index}>
                <ListItemText primary={enemy}/>
              </ListItem>))}
            </List>
          </CardContent>
        </Card>
      </Grid>))}
    </Grid>
  </div>);
}

export default CharacterList;
