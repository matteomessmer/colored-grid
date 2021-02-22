import React from 'react';
import { ScrollView, ListItem, View, ActivityIndicato0r, Text } from 'react-native';

export default class ColoredList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    generateColor = (index, tot) => {
        let s=50, l=75;

        const macroHues=360/6;
        const whichMacroHue = index%6;
        const whichMicroHue = macroHues/tot*index;
        let h = macroHues*whichMacroHue+whichMicroHue;

        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    render() {
        const elementsList = this.props.list.map((el, index) => {
            return (
                <View onPress={() => this.props.onClick(el)}
                    style={{ height: 150, width: '50%', backgroundColor: this.generateColor(index, this.props.list.length) }}>
                    <Text style={{ color: 'black', fontSize: 18, position: 'absolute', bottom: 10, right: 10 }}>
                        {el.name}
                    </Text>
                </View>
            )
        }
        );
        return (
            <ScrollView style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {elementsList}
                </View>
            </ScrollView>
        )
    }
}
