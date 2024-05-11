import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Head = () => {
  return (
    <View
      style={{
        backgroundColor: '#EFEFEF',
        height: 230,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <View
        style={{
          position: 'absolute',
          top: -40,
          left: -120,
          width: 500,
        }}>
        <Icon name="logo-react" color={'rgba(87, 109, 236, 0.5)'} size={500} />
      </View>
      <Text style={{fontSize: 35, fontWeight: '900', textAlign: 'center'}}>
        {'Welcome to \nReact Native \n& \nVector Icons'}
      </Text>
      <Text style={{position: 'absolute', top: 0, right: 10}}>
        By FerRiv3ra
      </Text>
    </View>
  );
};

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Head />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Pre installed package">
            This template has the{' '}
            <Text style={styles.highlight}>react-native-vector-icons</Text>{' '}
            package pre-installed for the use of icons in your react native
            application.
          </Section>
          <Section title="Ready to use">
            This template is ready to be used, just run{' '}
            <Text style={styles.highlight}>npm install</Text> to install the
            dependencies.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
