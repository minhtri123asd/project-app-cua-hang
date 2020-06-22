import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView, Image} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width-20;

class BackgroundCarousel extends React.Component{
    scrollRef = React.createRef();
    constructor(props){
        super(props);

        this.state = {
            selectedIndex:0
        }
    }
    componentDidMount = () => {
        setInterval(() => {
      this.setState(
        (prev) => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1,
        }),
        () => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                })
            })
        }, 3000)
    }
    //đổi chấm
    setSelectedIndex = event => {
        //chiều ngang của sizeView
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        //hiện vị trí khi kéo ảnh
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({selectedIndex});
    }
    render(){
        const {images} = this.props
        const {selectedIndex} = this.state
        return(
            <View style = {{width:'100%', height:'100%'}}>
                <ScrollView
                horizontal
                pagingEnabled
                onMomentumScrollEnd={this.setSelectedIndex}
                ref = {this.scrollRef}
                >
                    {images.map(image => (
                        <Image
                        key = {image}
                        source ={{uri:image}}
                        style = {styles.backgroundImage}
                        />
                    ))}
                </ScrollView>
                <View style = {styles.circleDiv}>
                    {images.map((image, i) => (
                        <View
                        key={image}
                        style={[styles.whiteCircle, {opacity: i === selectedIndex ? 0.5 : 1}]}
                        />
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        height:'100%',
        width:DEVICE_WIDTH,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    circleDiv:{
        position:'absolute',
        bottom:15,
        height:10,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    whiteCircle:{
        width:10,
        height:10,
        borderRadius:10,
        margin:5,
        backgroundColor:'#fff',
    }
})


export {BackgroundCarousel};