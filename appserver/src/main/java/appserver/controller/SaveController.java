package appserver.controller;


import appserver.server.SaveServer;
import appserver.vo.LotteryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SaveController {
    @Autowired
    private SaveServer saveServer;

    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/get",method = RequestMethod.GET)
    public List<LotteryVO> get(){
        return saveServer.get();
    }

    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public boolean modifyCourse(@RequestBody() LotteryVO lotteryVO){
        return  saveServer.save(lotteryVO);
    }
}
