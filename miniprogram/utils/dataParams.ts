// 查询数据结构
export function getDataParams(rule,data){
    let dataParams = {};
    for(let index in rule){
        const item = rule[index];
        let indexMap = {};
        item.map(n => {
            if(index === '#gte' && n.match(/_time$/ig)){
                indexMap[n] = data["createTime"];
            }else if(index === '#lte' && n.match(/_time$/ig)){
                indexMap[n] = data["endTime"];
            }else{
                indexMap[n] = data[n];
            }
        });
        dataParams[index] = indexMap;
    }
    
    // console.log(dataParams);
    return dataParams;
}
// 分页的数据结构
export function getPageParams(rule,data,pageSize,pageIndex,refresh=true){
    let dataParams = {"#content":getDataParams(rule,data)};
    
    if(refresh) dataParams["#cache"] = "refresh"; //强制刷新后台缓存
    
    dataParams["#content"]["#size"] = pageSize || 10;
    dataParams["#content"]["#start"] = pageIndex || 0;
    return dataParams;
}

export function getContent(data){
    return data["#content"];
}

export function getPageTotal(data){
    const ext = JSON.parse( data["#ext"] );
    return ext.total;
}

export function isEmpty(str){
    return str==null || str==undefined || str==''
}