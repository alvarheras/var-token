import React, { useEffect, useState } from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars, GiCutDiamond, GiRock  } from 'react-icons/gi';
import { GiSoccerBall, GiChalkOutlineMurder } from 'react-icons/gi';

import { IconContext } from 'react-icons/lib';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingDescription,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

const TOTAL_TOKENS = 112100000; // Total inicial de tokens

const Pricing = () => {
  const [tokensBurned, setTokensBurned] = useState(0);

/*   useEffect(() => {
    const fetchTokenBalance = async () => {
      try {
        const response = await fetch('https://solana-api.projectserum.com/tokenBalance/1nc1nerator11111111111111111111111111111111');
        const data = await response.json();
        console.log(data);
        const tokensBurned = data.value.uiAmount;
        setTokensBurned(tokensBurned);
      } catch (error) {
        console.error('Error fetching token balance:', error);
      }
    };

    fetchTokenBalance();
    const interval = setInterval(fetchTokenBalance, 60000); // Actualiza cada minuto

    return () => clearInterval(interval);
  }, []); */

  const burnPercentage = (tokensBurned / TOTAL_TOKENS) * 100;

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>$VAR BURN SYSTEM</PricingHeading>
          <PricingDescription>
            The development wallet (<a href="https://solscan.io/account/DTBtwoQHgySa4yhvEoxvyUqHNdP4wEEZj9RzKw14aoBN" target="_blank" rel="noopener noreferrer">DTBtwoQHgySa4yhvEoxvyUqHNdP4wEEZj9RzKw14aoBN</a>) will be used for the burn mechanism, giveaways, match predictions, and more. Experience the excitement of the Euro Cup and Copa America with $VAR!
          </PricingDescription>
{/*           <div style={{ width: '100%', margin: '20px 0' }}>
            <ProgressBar now={burnPercentage} label={`${burnPercentage.toFixed(2)}%`} />
          </div> */}
          <PricingContainer>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiSoccerBall />
                </PricingCardIcon>
                <PricingCardPlan>Goal Review</PricingCardPlan>
                <PricingCardCost>1M VAR</PricingCardCost>
                <PricingCardLength>per goal review</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1M VAR tokens burned</PricingCardFeature>
                  <PricingCardFeature>Includes Euro Cup & Copa America</PricingCardFeature>
                  <PricingCardFeature>Ensures fair play</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiChalkOutlineMurder />
                </PricingCardIcon>
                <PricingCardPlan>Penalty Review</PricingCardPlan>
                <PricingCardCost>500K VAR</PricingCardCost>
                <PricingCardLength>per penalty review</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>500K tokens burned</PricingCardFeature>
                  <PricingCardFeature>Includes Euro Cup & Copa America</PricingCardFeature>
                  <PricingCardFeature>Enhances match integrity</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Offside Review</PricingCardPlan>
                <PricingCardCost>250k VAR</PricingCardCost>
                <PricingCardLength>per offside review</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>250k VAR tokens burned</PricingCardFeature>
                  <PricingCardFeature>Includes Euro Cup & Copa America</PricingCardFeature>
                  <PricingCardFeature>Keeps the game fair</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
