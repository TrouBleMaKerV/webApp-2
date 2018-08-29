package appserver.server;

import appserver.vo.ResultVO;
import appserver.vo.Variation;

import java.util.List;

public interface ThreeNumServer {
    List<ResultVO> getResult(String a,String b,String c);
    List<Variation> getVariationResult(String a, String b, String c);
}
