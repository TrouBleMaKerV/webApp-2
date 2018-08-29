package appserver.controller;

import appserver.server.TwoNumServer;
import appserver.vo.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TwoNumController {
    @Autowired
    private TwoNumServer twoNumServer;
    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/getTwoNum",method = RequestMethod.GET)
    public List<ResultVO> get(@RequestParam("a") String a , @RequestParam("b") String b){
        return twoNumServer.getResult(a,b);
    }
}
