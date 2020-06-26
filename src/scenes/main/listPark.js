import React,{useEffect , useState , useContext} from 'react'
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {getAllPark} from '../../services/getAllPark';
import Context from '../../store/store';
import {Loader, ListCard, SearchBar} from '../../components/index'

const ListPark = () => {
const [loading, setLoading] = useState(true),
    [search,setSearch] = useState(''),
    {state, dispatch} = useContext(Context),
    [data,setData] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            setLoading(true);
            let park = await getAllPark();
            dispatch({type:'SET_MAP_DATA',payload:park});
            setData(park);
            setLoading(false)
        }
        fetchData()
    },[]);

    function searchText(text) {
        const newData = state.mapData.filter(item => {
            const itemData =  `${item['Park Adi'].toUpperCase()} ${item['Ilce'].toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        setSearch(text);
        setData(newData);
    }

    const renderItem = (item)=>{
        console.log("İtem:",item);
        return(
            <View>
                <ListCard item={item._id} imageLeftSource={'ios-map'} text={item['Park Adi']} onPress={() => alert("selam")}/>
            </View>
        )
    };

    return(
        <SafeAreaView>
            <SearchBar placeHolder="Arama yap ..." onChange={(text) => searchText(text)} value={search}/>
            {
                data.length === 0 ? <Loader loading={loading}/> :
                    <FlatList
                        data={data}
                        renderItem={(data)=> renderItem(data.item)}
                        keyExtractor={(item,index)=> index}
                    />
            }
        </SafeAreaView>

    )
};



export default ListPark
