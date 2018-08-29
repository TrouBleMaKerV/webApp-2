package appserver.controller;

import appserver.server.SaveServer;
import appserver.server.ThreeNumServer;
import appserver.vo.LotteryVO;
import appserver.vo.ResultVO;
import appserver.vo.Variation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ThreeNumController {
    @Autowired
    private ThreeNumServer threeNumServer;
    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/getThreeNum",method = RequestMethod.GET)
    public List<ResultVO> get(@RequestParam("a") String a , @RequestParam("b") String b, @RequestParam("c") String c){
        return threeNumServer.getResult(a,b,c);
    }
    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/getThreeNumVariation",method = RequestMethod.GET)
    public List<Variation> getVariation(@RequestParam("a") String a , @RequestParam("b") String b, @RequestParam("c") String c){
        return threeNumServer.getVariationResult(a,b,c);
    }
}
