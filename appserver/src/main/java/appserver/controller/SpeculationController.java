package appserver.controller;

import appserver.server.SpeculationServer;
import appserver.vo.Variation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SpeculationController {
    @Autowired
    private SpeculationServer speculationServer;
    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/getSpeculation",method = RequestMethod.GET)
    public List<Variation> get(@RequestParam("a") String a ){
        return speculationServer.getResult(a);
    }
}
