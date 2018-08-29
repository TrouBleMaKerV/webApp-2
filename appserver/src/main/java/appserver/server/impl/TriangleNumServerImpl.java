package appserver.server.impl;

import appserver.server.TriangleNumServer;
import appserver.vo.LotteryVO;
import appserver.vo.Variation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TriangleNumServerImpl implements TriangleNumServer {
    private List<LotteryVO> lotteryVOList;
    private NumServer numServer;

    public TriangleNumServerImpl() {
        numServer = NumServer.getInstance();
        lotteryVOList = numServer.getLotteryVOList();
    }

    @Override
    public Variation getResult(String a, String b) {
        int[] num1 = new int[2];
        num1[0] = numServer.getNum(lotteryVOList.size() - 1, a);
        num1[1] = numServer.getNum(lotteryVOList.size() - 1, b);
        Variation variation = new Variation();
        variation.add(a, lotteryVOList.size() - 1);
        variation.add( b, lotteryVOList.size() - 1);
        for (int j = 0; j < lotteryVOList.size() - 1; j++) {
            int[] num2 = new int[2];
            num2[0] = numServer.getNum(j, a);
            num2[1] = numServer.getNum(j + 1, a);
            if (numServer.isSame(num1, num2)) {
                variation.add(a, j);
                variation.add( a, j + 1);
                variation.add( b, j);
            }
            num2[0] = numServer.getNum(j, b);
            num2[1] = numServer.getNum(j + 1, b);
            if (numServer.isSame(num1, num2)) {
                variation.add(a, j);
                variation.add(b, j);
                variation.add(b, j + 1);
            }
            num2[0] = numServer.getNum(j,a);
            num2[1] = numServer.getNum(j, b);
            if (numServer.isSame(num1, num2)) {
                variation.add(a, j);
                variation.add(b, j);
            }
        }
        return variation;
    }

    //获取i行的第a，b列的三角形数字

}
