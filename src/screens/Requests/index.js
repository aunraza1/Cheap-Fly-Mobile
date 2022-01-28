import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import I18n from '../../i18n';
const Requests = () => {
  const [accepted, setAccepted] = useState(true);
  const [pending, setPending] = useState(false);

  const getRequest = value => {
    if (value === 'accepted') {
      setAccepted(true);
      setPending(false);
    } else {
      setPending(true);
      setAccepted(false);
    }
  };
  return (
    <View style={styles.main_view}>
      <View style={styles.tabs_view}>
        <TouchableOpacity
          onPress={() => getRequest('accepted')}
          style={[
            styles.pending_view,
            {
              backgroundColor: accepted
                ? COLORS.green_color
                : COLORS.white_color,
              borderTopLeftRadius: SIZES.padding,
              borderBottomLeftRadius: SIZES.padding,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color: accepted ? COLORS.white_color : COLORS.black_color,
              },
            ]}
            text={I18n.t('accepted_text')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => getRequest('pending')}
          style={[
            styles.pending_view,
            {
              backgroundColor: pending
                ? COLORS.maroon_color
                : COLORS.white_color,
              borderTopRightRadius: SIZES.padding,
              borderBottomRightRadius: SIZES.padding,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color: pending ? COLORS.white_color : COLORS.black_color,
              },
            ]}
            text={I18n.t('pending_text')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Requests;
const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    marginTop: SIZES.padding2,
    backgroundColor: '#FAF9F6',
  },
  tabs_view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.white_color,
    borderRadius: SIZES.padding,
    height: SIZES.padding * 2.3,
    elevation: 1,
  },
  pending_view: {
    width: '50%',
    height: SIZES.padding * 2.3,
    justifyContent: 'center',
  },
  text: {
    ...FONTS.Medium15,
  },
});