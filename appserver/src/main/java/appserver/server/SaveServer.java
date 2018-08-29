package appserver.server;


import appserver.vo.LotteryVO;

import java.util.List;

public interface SaveServer {
     List<LotteryVO>  get();
    boolean save(LotteryVO vo);
}
