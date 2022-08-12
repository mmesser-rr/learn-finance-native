import React, { useCallback, useMemo, useRef, useState } from "react"
import RewardItem from '../index'
import { Text } from "src/components/common/Texts"
import { RedeemProps } from "src/types/opportunitiesRouterTypes"
import AppLayout from "src/components/layout/AppLayout"
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';

import styles from './styles'
import CloseIcon from 'src/assets/icons/close-gray.png';
import { Image, TouchableOpacity, View } from "react-native"
import Button from "src/components/common/Button"
import AppStyles from "src/config/styles"

const Redeem: React.FC<RedeemProps> = ({
  navigation,
  route
}) => {
  const [redeemed, setRedeemed] = useState(false)

  const heroPhotoUri = route.params.heroPhotoUri;
  const title = route.params.title;
  const wealthAmount = route.params.wealthAmount;
  const logoUri = route.params.logoUri;
  const description = route.params.description;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleRedeem = () => {
    setRedeemed(true)
    handleDismissModal()
  }

  const handleCancelRedeem = () => {
    setRedeemed(false)
  }

  return (
    <BottomSheetModalProvider>
      <AppLayout containerStyle={AppStyles.container} viewStyle={AppStyles.viewWrapper} scrollEnabled={false}>
        <View>
          <Text type="Headline/Large" variant='white'>How to Claim</Text>
          <Text type="Body/Large" variant='white'>Redeem your offer and you’ll receive an email with your discount code and instructions how to use it at your selected retailer.</Text>
          <RewardItem {...{ heroPhotoUri, title, wealthAmount, logoUri, description, onPress: () => null }} />
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={['40%']}
          backgroundStyle={styles.modalBackground}
          handleStyle={styles.handleStyle}
          onChange={console.log}
          index={0}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleDismissModal}>
              <Image source={CloseIcon} />
            </TouchableOpacity>
            <Text type="Headline/Large" variant='white'>Redeem Offer</Text>
            <Text type="Body/Large" variant='white'>You will receive a code in your email with detailed instructions of how to activate your offer.</Text>
            <Button actionStyle={AppStyles.redButton} onPress={handleRedeem}>
              <Text type="Body/Large" variant='white'>Redeem</Text>
            </Button>
            <Button actionStyle={AppStyles.transparentButton} onPress={handleDismissModal}>
              <Text type="Body/Large" variant='white'>Cancel</Text>
            </Button>
          </View>
        </BottomSheetModal>

        {!redeemed && (
          <Button variant="red" onPress={handlePresentModal}>
            <Text type="Body/Large" variant='white'>Redeem Offer</Text>
          </Button>
        )}

        {redeemed && (
          <View>
            <Button variant="red" actionStyle={styles.redeemedButton} disabled={true}>
              <Text type="Body/Large" variant='white'>Offer Redeemed</Text>
            </Button>
          </View>
        )}
      </AppLayout>
    </BottomSheetModalProvider>
  )
}

export default Redeem