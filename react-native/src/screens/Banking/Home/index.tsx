import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import {
  MediumBody,
  LargeBody,
  MediumTitle,
  Title,
} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <AppLayout containerStyle={styles.container}>
      <View>
        <Title>Hi John!</Title>
      </View>
      <View>
        <LargeBody>
          Total Balance $0
        </LargeBody>
      </View>
      <View>
        <View>
          <Title>
            Add money to your account
          </Title>
        </View>
        <View>
          <MediumBody>
            Transfer money from another bank account or set up an automatic paycheck deposit.
          </MediumBody>
        </View>
        <View>
          <View>
            <Button>Transfer from another bank</Button>
          </View>
          <View>
            <Button>Set up direct deposit</Button>
          </View>
        </View>
      </View>
      <View>
        <MediumTitle>POD</MediumTitle>
      </View>
      <View>
        <View>
          <Title>
            Let's set up your pods
          </Title>
        </View>
        <View>
          <MediumBody>
            All incoming payments will be divided among your pods. Learn how pods can help you financially.
          </MediumBody>
        </View>
        <View>
          <View>
            <Button>Set up Pods</Button>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default Home;
