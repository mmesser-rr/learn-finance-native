import React from "react"
import RewardItem from './index'
import { Text } from "src/components/common/Texts"
import { RedeemProps } from "src/types/opportunitiesRouterTypes"
import AppLayout from "src/components/layout/AppLayout"

import styles from '../styles'

const Redeem: React.FC<RedeemProps> = ({
  navigation,
  route
}) => {
  const heroPhotoUri = route.params.heroPhotoUri;
  const title = route.params.title;
  const wealthAmount = route.params.wealthAmount;
  const logoUri = route.params.logoUri;
  const description = route.params.description;

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper} scrollEnabled={false}>

      <Text type="Headline/Large">How to Claim</Text>
      <Text type="Headline/Large">Redeem your offer and you’ll receive an email with your discount code and instructions how to use it at your selected retailer.</Text>
      <RewardItem {...{heroPhotoUri, title, wealthAmount, logoUri, description, onPress: () => null}} />

    </AppLayout>
  )
}

export default Redeem