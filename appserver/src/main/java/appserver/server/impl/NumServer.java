package appserver.server.impl;

import appserver.server.SaveServer;
import appserver.vo.LotteryVO;
import appserver.vo.Variation;

import java.util.Arrays;
import java.util.List;

public class NumServer {
    SaveServer saveServer = new SaveServerImpl();
    private static List<LotteryVO> lotteryVOList ;
    private static NumServer numServer;
    private NumServer(){
        lotteryVOList = saveServer.get();
    }
    public  void init(){
        lotteryVOList = saveServer.get();
    }
    public static NumServer getInstance(){
        if(numServer == null){
            numServer = new NumServer();
        }
        return  numServer;
    }
    public List<LotteryVO> getLotteryVOList(){
        return  lotteryVOList;
    }
    //获取相应列的数字
    public  int getNum(int i ,String a){
        int i1 = 0;
        switch (a){
            case "one":
                i1 = lotteryVOList.get(i).one;
                break;
            case "two":
                i1 = lotteryVOList.get(i).two;
                break;
            case "three":
                i1 = lotteryVOList.get(i).three;
                break;
            case "four":
                i1 = lotteryVOList.get(i).four;
        }
        return i1;
    }
    public boolean isSame(int[] a, int[] b) {
        Arrays.sort(a);
        Arrays.sort(b);
        for (int i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
}
