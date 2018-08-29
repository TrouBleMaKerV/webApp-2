package appserver.server;

import appserver.vo.ResultVO;
import appserver.vo.Variation;

import java.util.List;

public interface TwoNumServer {
    List<ResultVO> getResult(String a,String b);
}
