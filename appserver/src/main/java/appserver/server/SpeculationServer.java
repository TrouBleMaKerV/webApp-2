package appserver.server;

import appserver.vo.Variation;

import java.util.List;

public interface SpeculationServer {
    List<Variation> getResult(String a);
}
