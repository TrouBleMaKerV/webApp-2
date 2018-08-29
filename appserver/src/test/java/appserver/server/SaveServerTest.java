package appserver.server;

import appserver.server.SaveServer;
import appserver.server.impl.SaveServerImpl;
import appserver.server.impl.ThreeNumServerImpl;
import appserver.server.impl.TwoNumServerImpl;
import appserver.vo.LotteryVO;
import appserver.vo.ResultVO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;


@RunWith(SpringRunner.class)
@SpringBootTest
public class SaveServerTest {
    @Test
    public void test(){
        ThreeNumServerImpl threeNumServer = new ThreeNumServerImpl();
        int[] i = new int[3];
        i[0] = 1;
        i[1] = 2;
        i[2] = 3;
        int[] j = new int[3];
        j[0] = 3;
        j[1] = 2;
        j[2] = 1;
    }
    @Test
    public void test2(){
        ThreeNumServerImpl threeNumServer = new ThreeNumServerImpl();
        List<ResultVO> resultVOS = threeNumServer.getResult("one","two","three");
        System.out.println(resultVOS.size());
        System.out.println(resultVOS.get(0).result);
        TwoNumServer twoNumServer = new TwoNumServerImpl();
        resultVOS = twoNumServer.getResult("one","two");
        System.out.println(resultVOS.size());
        System.out.println(resultVOS.get(0).result);
    }
}