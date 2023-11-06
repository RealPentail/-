package myproject.board.repository;

import lombok.RequiredArgsConstructor;
import myproject.board.domain.Board;
import myproject.board.repository.mybatis.BoardMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class BoardListRepository implements BoardRepository {

    private final BoardMapper mapper;

    @Override
    public Board save(Board board) {
        mapper.save(board);
        return board;
    }

    @Override
    public Optional<Board> findById(Long id) {
        return mapper.findById(id);
    }

    @Override
    public List<Board> findAll() {
        return mapper.findAll();
    }

}
