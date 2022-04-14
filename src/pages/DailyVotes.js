import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../routers/styled';

const dailyVotes = {
  mlokyVotes: [
    { value: 'Coinscope', link: 'https://www.coinscope.co/coin/mloky' },
    { value: 'Coinhunters', link: 'https://coinhunters.cc/tokens/MLOKY' },
    { value: 'Coinsniper', link: 'https://coinsniper.net/coin/25149' },
    { value: 'Coinvote', link: 'https://coinvote.cc/coin/MLOKY' },
    { value: 'Coinhunt', link: 'https://coinhunt.cc/coin/986129781' },
    { value: 'CoinMooner', link: 'https://coinmooner.com/coin/10971' },
    {
      value: 'Coindiscovery',
      link: 'https://coindiscovery.app/coin/mloky/overview',
    },
    { value: 'CoinTopList', link: 'https://cointoplist.net/coin/mloky' },
    { value: 'GemFinder', link: 'https://gemfinder.cc/gem/6874' },
    { value: 'Gemhunters', link: 'https://gemhunters.net/coin/mloky/' },
    {
      value: 'Rugfreecoins',
      link: 'https://www.rugfreecoins.com/details/7483',
    },
    { value: 'MyCoinVote', link: 'https://www.mycoinvote.com/MLOKY' },
    { value: 'CNToken', link: 'https://cntoken.io/coin/18248' },
  ],
  luchowVotes: [
    { value: 'Coinscope', link: 'https://www.coinscope.co/coin/luchow?' },
    { value: 'Coinhunters', link: 'https://coinhunters.cc/tokens/LunaChow' },
    { value: 'Coinsniper', link: 'https://coinsniper.net/coin/12571' },
    { value: 'Coinvote', link: 'https://coinvote.cc/coin/LunaChow' },
    { value: 'Coinhunt', link: 'https://coinhunt.cc/coin/1140706065' },
    { value: 'Coinmooner', link: 'https://coinmooner.com/coin/3610' },
    { value: 'Coindiscovery', link: 'https://coindiscovery.app/coin/lunachow' },
    { value: 'Coinsgods', link: 'https://coinsgods.com/coin/1036' },
    { value: 'Coinfair', link: 'https://coinfair.cc/coin/416' },
    {
      value: 'Coinseek',
      link: 'https://www.coinseek.xyz/coins/cc9a5acd-f845-4ba7-8b8a-7f892481ef72',
    },
    { value: 'Cointoplist', link: 'https://cointoplist.net/coin/LunaChow' },
    { value: 'Gemfinder', link: 'https://gemfinder.cc/gem/3023' },
    { value: 'Gemhunters', link: 'https://gemhunters.net/coin/lunachow/' },
    {
      value: 'Freshcoins',
      link: 'https://www.freshcoins.io/cZHr7w0fIyKwKl3NIim8/coin/lunachow/luchow',
    },
    {
      value: 'Rugfreecoins',
      link: 'https://www.rugfreecoins.com/details/3209',
    },
    { value: '100xcoinhunt', link: 'https://100xcoinhunt.com/coin/LunaChow' },
    { value: 'Coinscout', link: 'https://www.coinscout.cc/listing/lunachow/' },
    {
      value: 'CoinPaprika',
      link: 'https://coinpaprika.com/coin/luchow-lunachow/',
    },
    { value: 'CryptoMoonShots', link: 'https://cryptomoonshots.biz/#/coin/3' },
    { value: 'MyCoinVote', link: 'https://www.mycoinvote.com/LunaChow' },
    {
      value: 'CoinAlpha',
      link: 'https://coinalpha.app/token/0xa5ef74068d04ba0809b7379dd76af5ce34ab7c57',
    },
    { value: 'Watcher.Guru', link: 'https://watcher.guru/coin/lunachow' },
    { value: 'Trustcoin', link: 'https://trustcoin.cc/coins/lunachow' },
    { value: 'Coinranking.com', link: 'http://coinranking.com/' },
    {
      value: 'Earlycoins',
      link: 'https://www.earlycoins.io/coin-details/613d2928aadae3515996dc15',
    },
  ],
};

console.log(dailyVotes.luchowVotes.length);

const DailyVotes = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        maxWidth: '600px',
      }}
      container
      justifyContent="center"
      spacing={2}
      xs={12}
      md={10}
      lg={6}
    >
      <Grid container item xs={6} alignItems="center" direction="column">
        <Typography className={classes.dailyVotesTitle} gutterBottom>
          MLOKY Votes
        </Typography>
        {dailyVotes.mlokyVotes.map((item, index) => (
          <a
            style={{ textDecoration: 'none' }}
            key={index}
            rel="noreferrer"
            target="_blank"
            href={item.link}
          >
            <Button
              sx={{
                textTransform: 'none',
                color: '#FFFFFF',
                border: '6px solid #E24717',
                width: { xs: '120px', md: '200px' },
                fontSize: { xs: '12px', md: '16px' },
                borderRadius: '0',
                marginBottom: '10px',
              }}
            >
              {item.value}
            </Button>
          </a>
        ))}
      </Grid>
      <Grid container item xs={6} alignItems="center" direction="column">
        <Typography className={classes.dailyVotesTitle} gutterBottom>
          LUCHOW Votes
        </Typography>
        {dailyVotes.luchowVotes.map((item, index) => (
          <a
            style={{ textDecoration: 'none' }}
            key={index}
            rel="noreferrer"
            target="_blank"
            href={item.link}
          >
            <Button
              sx={{
                textTransform: 'none',
                color: '#FFFFFF',
                border: '6px solid #E24717',
                width: { xs: '120px', md: '200px' },
                fontSize: { xs: '12px', md: '16px' },
                borderRadius: '0',
                marginBottom: '10px',
              }}
            >
              {item.value}
            </Button>
          </a>
        ))}
      </Grid>
    </Grid>
  );
};

export default DailyVotes;
