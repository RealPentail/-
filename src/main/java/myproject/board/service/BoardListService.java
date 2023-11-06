package myproject.board.service;

import lombok.RequiredArgsConstructor;
import myproject.board.domain.Board;
import myproject.board.repository.BoardListRepository;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
@RequiredArgsConstructor
public class BoardListService implements BoardService {

    private final BoardListRepository repository;

    @Override
    public Board save(Board board) {
        repository.save(board);
        return board;
    }

    @Override
    public List<Board> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Board> findById(Long id) {
        return repository.findById(id);
    }
}
