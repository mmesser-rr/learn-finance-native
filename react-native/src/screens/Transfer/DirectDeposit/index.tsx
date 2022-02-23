import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'src/components/common/Button';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import {GradientButtonColors} from 'src/utils/constants';
import CloseIcon from 'src/assets/icons/close.svg';

import styles from './styles';

const DirectDeposit: React.FC = () => {
  const [copyRouting, setCopyRouting] = useState(false);
  const [copyAccount, setCopyAccount] = useState(false);

  useEffect(() => {
    if (copyRouting) {
      setTimeout(() => {
        setCopyRouting(false);
      }, 5000);
    }
  }, [copyRouting]);

  useEffect(() => {
    if (copyAccount) {
      setTimeout(() => {
        setCopyAccount(false);
      }, 5000);
    }
  }, [copyAccount]);

  const onDone = () => {};

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.head}>
          <View></View>
          <Text type="Title/Large">Direct Deposit</Text>
          <CloseIcon />
        </View>
        <View>
          <Text type="Body/Large" style={styles.label}>
            Get paychecks and other payments into your account by sharing the
            account details below with an employer or other depositor.
          </Text>
          <Text type="Body/Large" style={styles.label}>
            It may take 1 or 2 pay cycles to receive your direct deposit.
          </Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text type="Title/Medium">ROUTING NUMBER</Text>
            <Text type="Headline/Small">011 456 345</Text>
          </View>
          <LinearGradient
            style={styles.actionGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={GradientButtonColors}
          >
            <Button
              actionStyle={[styles.copy, copyRouting ? styles.activeCopy : {}]}
              onPress={() => setCopyRouting(true)}
            >
              <Text type="Body/Large">{copyRouting ? 'Copied' : 'Copy'}</Text>
            </Button>
          </LinearGradient>
        </View>
        <View style={styles.card}>
          <View>
            <Text type="Title/Medium">ACCOUNT NUMBER</Text>
            <Text type="Headline/Small">78 900 87081</Text>
          </View>
          <LinearGradient
            style={styles.actionGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={GradientButtonColors}
          >
            <Button
              actionStyle={[styles.copy, copyAccount ? styles.activeCopy : {}]}
              onPress={() => setCopyAccount(true)}
            >
              <Text type="Body/Large">{copyAccount ? 'Copied' : 'Copy'}</Text>
            </Button>
          </LinearGradient>
        </View>
        <View>
          <Text type="Title/Medium">BANK INFORMATION</Text>
        </View>
        <View style={styles.address}>
          <Text type="Body/Large">
            Blue Ridge Bank 17 West Main Street Lurgy, VA 22835
          </Text>
        </View>
        <View>
          <Text type="Title/Medium">
            You can always find this information under Home - Set up direct
            deposit.
          </Text>
        </View>
      </View>
      <View>
        <SubmitButton isValid={true} actionLabel="Done" onSubmit={onDone} />
      </View>
    </AppLayout>
  );
};

export default DirectDeposit;
