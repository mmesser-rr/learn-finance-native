import React, { ReactNode, useState } from 'react';
import { DefaultTheme } from 'react-native-paper';

import DropDown from "./library";
import AppColors from 'src/config/colors';
import ArrowDownIcon from 'src/assets/icons/arrow-down.svg';

import styles from './styles';

export interface DropDownList {
  label: string;
  value: string | number;
  custom?: ReactNode;
}

interface DropdownProps {
  label?: string;
  list: DropDownList[];
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  list,
}) => {
  const [value, setValue] = useState<string>("");
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <DropDown
      label={label}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={value}
      setValue={setValue}
      list={list}
      dropdownIconColor={AppColors.whiteColor}
      dropdownUpIcon={() => <ArrowDownIcon />}
      dropdownDownIcon={() => <ArrowDownIcon />}
      theme={{
        ...DefaultTheme,
        roundness: 0,
        colors: {
          ...DefaultTheme.colors,
          primary: AppColors.whiteColor,
          background: 'transparent',
          text: AppColors.whiteColor,
          disabled: AppColors.disableColor,
          placeholder: AppColors.placeholderColor,
        }
      }}
      contentStyle={styles.contentStyle}
      dividerStyle={styles.dividerStyle}
      dropDownStyle={styles.dropDownStyle}
      dropDownItemStyle={styles.dropDownItemStyle}
      dropDownItemSelectedStyle={styles.dropDownItemSelectedStyle}
    />
  );
};

export default Dropdown;
