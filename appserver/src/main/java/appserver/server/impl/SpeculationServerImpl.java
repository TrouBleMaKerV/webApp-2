package appserver.server.impl;

import appserver.server.SpeculationServer;
import appserver.vo.LotteryVO;
import appserver.vo.Variation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SpeculationServerImpl implements SpeculationServer {
    private List<LotteryVO> lotteryVOList;
    private NumServer numServer;

    public SpeculationServerImpl() {
        numServer = NumServer.getInstance();
        lotteryVOList = numServer.getLotteryVOList();
    }
    @Override
    public List<Variation> getResult(String a) {
        List<Variation> result = new ArrayList<>();
        Variation threeV = new Variation();
        Variation twoV = new Variation();
        int i = lotteryVOList.size();
        boolean isThreeSame = false;
        boolean isTwoSame = false;
        int three = numServer.getNum(i - 1,a) + numServer.getNum(i - 2 ,a) + numServer.getNum(i - 3 ,a);
        int two = numServer.getNum(i -1 ,a) + numServer.getNum(i - 2 ,a) ;
        for (int j = 0; j < i - 3; j ++) {
            //当前位置的往下三个数字的和
            int three2 = numServer.getNum(j,a) + numServer.getNum(j + 1,a) + numServer.getNum( j + 2 ,a);
            //当前位置的往下两个数字的和
            int two2 = numServer.getNum(j,a) + numServer.getNum(j + 1,a);
            if(three == three2 ){
                if(numServer.getNum(i -1 ,a) == numServer.getNum(j + 3,"one")){
                    isThreeSame = true;
                    threeV.add("one",j + 3);
                    threeV.add(a,j);
                    threeV.add(a,j + 1);
                    threeV.add(a,j + 2);
                }else if( numServer.getNum(i - 1 ,a) == numServer.getNum(j + 3,"two") ) {
                    isThreeSame = true;
                    threeV.add("two",j + 3);
                    threeV.add(a,j);
                    threeV.add(a,j + 1);
                    threeV.add(a,j + 2);
                }else if( numServer.getNum(i - 1 ,a) == numServer.getNum(j + 3,"three") ) {
                    isThreeSame = true;
                    threeV.add("three",j + 3);
                    threeV.add(a,j);
                    threeV.add(a,j + 1);
                    threeV.add(a,j + 2);
                }else if( numServer.getNum(i - 1 ,a) == numServer.getNum(j + 3,"four") ) {
                    isThreeSame = true;
                    threeV.add("four",j + 3);
                    threeV.add(a,j);
                    threeV.add(a,j + 1);
                    threeV.add(a,j + 2);
                }
            }
            if(two == two2 ){
                if(numServer.getNum(i -1 ,a) == numServer.getNum(j + 2,"one")){
                    isTwoSame = true;
                    twoV.add(a,j);
                    twoV.add(a,j + 1);
                    twoV.add("one",j + 2);
                }else if( numServer.getNum(i - 1 ,a) == numServer.getNum(j + 2,"two") ) {
                    isTwoSame = true;
                    twoV.add(a,j);
                    twoV.add(a,j + 1);
                    twoV.add("two",j + 2);
                }else if( numServer.getNum(i - 1 ,a) == numServer.getNum(j + 2,"three") ) {
                    isTwoSame = true;
                    twoV.add(a,j);
                    twoV.add(a,j + 1);
                    twoV.add("three",j + 2);
                }else if( numServer.getNum(i - 1 ,a) == numServer.getNum(j + 2,"four") ) {
                    isTwoSame = true;
                    twoV.add(a,j);
                    twoV.add(a,j + 1);
                    twoV.add("four",j + 2);
                }
            }
        }
        if(isThreeSame == true){
            threeV.add(a,i - 1);
            threeV.add(a, i - 2);
            threeV.add(a,i - 3);
        }else if(isTwoSame == true){
            twoV.add(a,i - 1);
            twoV.add(a,i - 2);
        }
        result.add(threeV);
        result.add(twoV);
        return result;
    }
}
