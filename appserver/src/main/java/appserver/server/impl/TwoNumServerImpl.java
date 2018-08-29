package appserver.server.impl;

import appserver.server.SaveServer;
import appserver.server.TwoNumServer;
import appserver.vo.LotteryVO;
import appserver.vo.ResultVO;
import appserver.vo.Variation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@Service
public class TwoNumServerImpl implements TwoNumServer{
    private List<LotteryVO> lotteryVOList ;
    private NumServer numServer ;
    public TwoNumServerImpl(){
        numServer = NumServer.getInstance();
        lotteryVOList = numServer.getLotteryVOList();
    }
    @Override
    public List<ResultVO> getResult(String a, String b) {
        List<ResultVO> result = new ArrayList<>();
        List<Integer> exist = new ArrayList<>();
        for(int i = 0 ; i < lotteryVOList.size() ; i ++){
            if(exist.indexOf(i) != -1){
                continue;
            }
            //计算出现的次数
            int tempNum = 1;
            ResultVO resultVO = new ResultVO();
            resultVO.result.add(i);
            int[] i1 = this.getNums(i,a,b);
            for(int j = i + 1 ; j < lotteryVOList.size() ; j ++ ){
                int[] j1 = this.getNums(j,a,b);
                if(numServer.isSame(i1,j1)){
                    tempNum += 1;
                    resultVO.result.add(j);
                    exist.add(j);
                }
            }
            if(result.size() < 6 && tempNum >= 2){
                result.add(resultVO);
            }else if(tempNum >= 2){
                for(int j = 0 ;j < result.size(); j ++){
                    if( result.get(j).result.size() < resultVO.result.size() ){
                        result.remove(j);
                        result.add(resultVO);
                    }
                }
            }
        }
        return result;
    }
    //获取当前列的数字
    private int[] getNums(int i ,String a,String b){
        int[] i1 = new int[2];
        i1[0] = numServer.getNum(i,a);
        i1[1] = numServer.getNum(i,b);
        return i1;
    }
}
