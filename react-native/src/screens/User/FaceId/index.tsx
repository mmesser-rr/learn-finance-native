import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import {GradientButtonColors} from 'src/utils/constants';
import {calculateContentHeight} from 'src/utils/functions';

import styles from './styles';

const UserFaceId: React.FC = () => {
  const [safeviewHeight, SetSafeviewHeight] = useState(0);

  useEffect(() => {
    async function getContentHeight() {
      SetSafeviewHeight(await calculateContentHeight());
    }

    getContentHeight();
  }, []);

  return (
    <AppLayout containerStyle={styles.container}>
      <View style={{height: safeviewHeight / 2}}>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            Turn on Face ID
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.caption}>
            Would you like to turn on Face ID for your future login?
          </Text>
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Turn on Face ID"
          style={styles.submit}
          onSubmit={() => {}}
        />
        <LinearGradient
          style={styles.laterActionGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={GradientButtonColors}>
          <Button>
            <Text type="Body/Large">Maybe Later</Text>
          </Button>
        </LinearGradient>
      </View>
    </AppLayout>
  );
};

export default UserFaceId;
