import React, { useCallback, useEffect, useRef, useState } from "react"
import { Text } from "src/components/common/Texts"
import { AboutEventProps } from "src/types/opportunitiesRouterTypes"
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import { format } from 'date-fns-tz'
import ReadMore from '@fawazahmed/react-native-read-more';

import styles from './styles'
import { Image, ImageBackground, TouchableOpacity, View } from "react-native"
import Button from "src/components/common/Button"
import { Storage } from "aws-amplify"
import CloseIcon from 'src/assets/icons/close-gray.png';
import BackwardIcon from 'src/assets/icons/backward.png';
import WealthIcon from 'src/assets/icons/wealth.png';
import { Event } from "src/types/API";

const Divider = () => (
  <View style={styles.divider} />
)
const AboutEvent: React.FC<AboutEventProps> = ({
  navigation,
  route
}) => {
  const [heroPhotoSrc, setHeroPhotoSrc] = useState("")
  const [avatarSrc, setAvatarSrc] = useState("")
  const [confirmed, setConfirmed] = useState(false)

  const data: Event = route.params.data

  const date = format(new Date(data.dateTime), "MMMM do")
  const time = format(new Date(data.dateTime), "h:maaa zzz")

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleConfirm = () => {
    setConfirmed(true)
    handleDismissModal()
  }

  const handleCancelConfirm = () => {
    setConfirmed(false)
  }

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  useEffect(() => {
    const setImages = async () => {
      const _heroPhotoSrc = await Storage.get(data.heroPhotoUri, { download: false })
      const _avatarSrc = await Storage.get(data.logoUri, { download: false })

      setHeroPhotoSrc(_heroPhotoSrc)
      setAvatarSrc(_avatarSrc)
    }

    setImages()
  }, [])

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View>
          {/* Profile */}
          {!!heroPhotoSrc.length && !!avatarSrc.length && (
            <ImageBackground source={{ uri: heroPhotoSrc }} resizeMode="cover" style={styles.heroPhoto}>
              <TouchableOpacity style={styles.backward} onPress={() => navigation.goBack()}>
                <Image source={BackwardIcon} />
              </TouchableOpacity>
              <Image source={{ uri: avatarSrc }} style={styles.avatar} />
            </ImageBackground>
          )}

          {/* Event Details */}
          <View style={styles.paddingHorizontal16}>
            <Text type="Body/Medium" variant='white' style={styles.tagline}>{data.tagline}</Text>
            <Text type="Headline/Medium" variant='white'>About</Text>
            <ReadMore 
              numberOfLines={4}
              style={styles.description}
              seeMoreText="read more"
              seeMoreStyle={styles.seeMore}
              seeLessText="read less"
              seeLessStyle={styles.seeLess}
              ellipsis=".."
            >
              {data.description}
            </ReadMore>
            <View style={styles.infoBox}>

              <View style={styles.infoRow}>
                <Text type="Body/Large" variant='white'>Date</Text>
                <Text type="Body/Large" variant='white'>{date}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Body/Large" variant='white'>Time</Text>
                <Text type="Body/Large" variant='white'>{time}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Body/Large" variant='white'>Location</Text>
                <Text type="Body/Large" variant='white'>{data.location}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Body/Large" variant='white'>Reward</Text>
                <View style={styles.wealthAmount}>
                  <Image source={WealthIcon} style={styles.wealthIcon} />
                  <Text type="Body/Large" variant='white'>{data.reward}</Text>
                </View>

              </View>
            </View>
          </View>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={[300]}
            backgroundStyle={styles.modalBackground}
            handleStyle={styles.handleStyle}
            backdropComponent={renderBackdrop}
            onChange={console.log}
            index={0}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeIcon} onPress={handleDismissModal}>
                <Image source={CloseIcon} />
              </TouchableOpacity>
              <View style={styles.modalBody}>
                <Text type="Headline/Medium" variant='white' style={styles.modalTitle}>Confirm Registration?</Text>
                <Text type="Body/Medium" variant='white' style={styles.modalDescription}>Event details will be sent via email, you can change/cancel your registration in your profile.</Text>
                <Button variant="red" onPress={handleConfirm}>
                  <Text type="Body/Medium" variant='white'>Confirm</Text>
                </Button>
                <Button variant="transparent" onPress={handleDismissModal}>
                  <Text type="Body/Medium" variant='white'>Cancel</Text>
                </Button>
              </View>
            </View>
          </BottomSheetModal>
        </View>

        <View style={styles.paddingHorizontal16}>
          {!confirmed && (
            <Button variant="red" actionStyle={styles.rsvpButton} onPress={handlePresentModal}>
              <Text type="Body/Large" variant='white'>RSVP</Text>
            </Button>
          )}

          {confirmed && (
            <View>
              <Button variant="red" actionStyle={styles.RegConfirmedButton} disabled={true}>
                <Text type="Body/Large" variant='white'>Registration Confirmed</Text>
              </Button>
              <Button variant="transparent" actionStyle={styles.cancelRegButton} onPress={handleCancelConfirm}>
                <Text type="Body/Large" variant='white'>Cancel Registration</Text>
              </Button>
            </View>
          )}
        </View>
      </View>
    </BottomSheetModalProvider>
  )
}

export default AboutEvent