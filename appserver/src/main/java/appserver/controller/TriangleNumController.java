package appserver.controller;

import appserver.server.TriangleNumServer;
import appserver.server.TwoNumServer;
import appserver.vo.ResultVO;
import appserver.vo.Variation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class TriangleNumController {
    @Autowired
    private TriangleNumServer triangleNumServer;
    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/getTriangleNum",method = RequestMethod.GET)
    public Variation get(@RequestParam("a") String a , @RequestParam("b") String b){
        return triangleNumServer.getResult(a,b);
    }
}
