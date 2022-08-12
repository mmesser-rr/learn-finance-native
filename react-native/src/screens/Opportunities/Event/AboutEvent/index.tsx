import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Text } from "src/components/common/Texts"
import { AboutEventProps } from "src/types/opportunitiesRouterTypes"
import {
  BottomSheetModal,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import { format } from 'date-fns-tz'

import styles from './styles'
import { Image, ImageBackground, TouchableOpacity, View } from "react-native"
import Button from "src/components/common/Button"
import { Storage } from "aws-amplify"
import CloseIcon from 'src/assets/icons/close-gray.png';

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

  const heroPhotoUri = route.params.heroPhotoUri;
  const logoUri = route.params.logoUri;
  const tagline = route.params.tagline;
  const sponsor = route.params.sponsor;
  const title = route.params.title;
  const description = route.params.description;
  const dateTime = route.params.dateTime;
  const location = route.params.location;
  const reward = route.params.reward;

  const date = format(new Date(dateTime), "MMMM do")
  const time = format(new Date(dateTime), "h:maaa zzz")

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
  
  useEffect(() => {
    const setImages = async () => {
      const _heroPhotoSrc = await Storage.get(heroPhotoUri, { download: false })
      const _avatarSrc = await Storage.get(logoUri, { download: false })

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
              <Image source={{ uri: avatarSrc }} style={styles.avatar} />
            </ImageBackground>
          )}

          {/* Event Details */}
          <View style={styles.eventDetails}>
            <Text type="Body/Large" variant='white'>{tagline}</Text>
            <Text type="Headline/Large" variant='white'>About</Text>
            <Text type="Body/Large" variant='white'>{description}</Text>
            <View style={styles.infoBox}>

              <View style={styles.infoRow}>
                <Text type="Headline/Small" variant='white'>Date</Text>
                <Text type="Headline/Small" variant='white'>{date}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Headline/Small" variant='white'>Time</Text>
                <Text type="Headline/Small" variant='white'>{time}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Headline/Small" variant='white'>Location</Text>
                <Text type="Headline/Small" variant='white'>{location}</Text>
              </View>

              <Divider />

              <View style={styles.infoRow}>
                <Text type="Headline/Small" variant='white'>Reward</Text>
                <Text type="Headline/Small" variant='white'>{reward}</Text>
              </View>
            </View>
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
              <Text type="Headline/Large" variant='white'>Confirm Registration?</Text>
              <Text type="Body/Large" variant='white'>Event details will be sent via email, you can change/cancel your registration in your profile.</Text>
              <Button variant="red" onPress={handleConfirm}>
                <Text type="Body/Large" variant='white'>Confirm</Text>
              </Button>
              <Button variant="transparent" onPress={handleDismissModal}>
                <Text type="Body/Large" variant='white'>Cancel</Text>
              </Button>
            </View>
          </BottomSheetModal>
        </View>

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
    </BottomSheetModalProvider>
  )
}

export default AboutEvent