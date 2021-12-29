import React, { ReactNode, useEffect, useState } from 'react';
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
  value?: string;
  list: DropDownList[];
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  list,
  value: propsValue,
  onChange,
  onBlur,
}) => {
  const [value, setValue] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    setValue(propsValue || '');
  }, [propsValue]);

  const dismissHandler = () => {
    setShowDropDown(false);

    if (onBlur) {
      onBlur();
    }
  };

  const changeHandler = (value: string) => {
    setValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <DropDown
      label={label}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => dismissHandler()}
      value={value}
      setValue={changeHandler}
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
